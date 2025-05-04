import { defineStore } from 'pinia'
import { data as posts } from '../data/posts.data'
import { ref } from 'vue'


// 从数据中提取所有的 tag 放入 tag 数组中
const tags = ref({})

const getALLTags = (data) => {
    // 先清空数据
    tags.value = []
    // 临时存放数据的数组
    let temp_arr = []
    // 遍历原始数据，把所有 tag 添加到 临时数组中
    for (let i = 0; i < data.length; i++) {
        // 先判断是否存在 信息中是否存在 tag ⭐
        if (data[i].frontmatter.tags) {
            // 获取当前文章的 tag 数组
            let now_tagarr = data[i].frontmatter.tags
            // 解构数组后，再添加到临时数组中
            temp_arr.push(...now_tagarr)
        }

    }

    // 数组去重并统计数量
    let obj = {}
    for (let i = 0; i < temp_arr.length; i++) {
        if (temp_arr[i] in obj) {
            obj[temp_arr[i]] = obj[temp_arr[i]] + 1;
        } else {
            obj[temp_arr[i]] = 1;
        }
    }

    // 补充一个总数
    // 暂时这样写，有更好的写法再说
    obj.全部文章 = data.length

    // 根据属性值排序

    const sortObj = (obj) => {
        // 降序排序value值
        let sortValue = Object.values(obj).sort((a, b) => {
            return b - a;
        })
        // 创建结果数组
        let res = {}
        // keys数组
        let keys = Object.keys(obj);
        // 给value值赋值相应keys值
        for (let i in sortValue) {
            // console.log(i);
            keys.forEach((item) => {
                if (sortValue[i] === obj[item]) {
                    res[item] = sortValue[i];
                }
            })
        }
        return res;
    }

    // 最后，把数据赋值给外部对象
    tags.value = sortObj(obj)

}

getALLTags(posts)

// 所有博客中提取文章分类

// 定义函数
const getALLCategory = (data) => {
    // 临时存放数据的数组
    let arr = []
    // 遍历原始数据，把所有 category 添加到 临时数组中
    for (let i = 0; i < data.length; i++) {
        // 先判断是否存在 信息中是否存在 Category ⭐
        if (data[i].frontmatter.category) {
            // 存在时，放入分类数组中
            arr.push(data[i].frontmatter.category)
        }
    }
    // 定义去重函数
    const unique = (arr) => [...new Set(arr)];
    // 去重
    arr = unique(arr)

    // 定义函数 => 将 `未分类` 移动到数组末尾
    // 注意！此函数会修改原数组
    function moveFirstToEnd(arr, target) {
        const index = arr.indexOf(target);
        if (index !== -1) {
            const [item] = arr.splice(index, 1); // 删除目标元素
            arr.push(item); // 添加到末尾
        }
        return arr;
    }
    // 执行函数
    moveFirstToEnd(arr, '未分类')

    // 返回最终处理后的数组
    return arr
}
// 执行，获取分类数组
const categories = getALLCategory(posts)



// 将对象转为方便处理的数组
const tags_arr = Object.entries(tags.value);




const sortedPosts = ref([])

const showedPosts = ref([])

const sort = (tag) => {
    let res = []
    if (tag == '全部文章') {
        // 返回全部文章
        res = posts
    } else {
        // 开始筛选文章
        res = posts.filter((item, index) => {
            if (item.frontmatter.tags) {
                if (item.frontmatter.tags.includes(tag)) {
                    return item
                }
            }
        })
    }

    sortedPosts.value = res

    showedPosts.value = res

    // showData.value = res.slice(0, pageSize.value)
}
// 初始化数据
sort('全部文章')

export const useBokeStore = defineStore('boke', {
    state: () => ({
        tags: tags_arr,
        nowTag: tags_arr[0][0],
        showedPosts: showedPosts,
        categories: categories
    }),
    actions: {
        changeActiveIndex(mo) {
            this.nowActiveNavItem = mo
        },

        changeNowTag(tag) {
            this.nowTag = tag
            sort(tag)
            this.showedPosts = showedPosts.value

        }

    }
})