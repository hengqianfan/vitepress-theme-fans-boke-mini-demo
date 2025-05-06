import { defineStore } from 'pinia'
import { data as posts } from '../data/posts.data'
import { ref } from 'vue'

// 将数组按最新文章排序
posts.reverse()

// 从数据中提取所有的 tag 放入 tag 数组中
// const tags = ref({})

// const getALLTags = (data) => {
//     // 先清空数据
//     tags.value = []
//     // 临时存放数据的数组
//     let temp_arr = []
//     // 遍历原始数据，把所有 tag 添加到 临时数组中
//     for (let i = 0; i < data.length; i++) {
//         // 先判断是否存在 信息中是否存在 tag ⭐
//         if (data[i].frontmatter.tags) {
//             // 获取当前文章的 tag 数组
//             let now_tagarr = data[i].frontmatter.tags
//             // 解构数组后，再添加到临时数组中
//             temp_arr.push(...now_tagarr)
//         }

//     }

//     // 数组去重并统计数量
//     let obj = {}
//     for (let i = 0; i < temp_arr.length; i++) {
//         if (temp_arr[i] in obj) {
//             obj[temp_arr[i]] = obj[temp_arr[i]] + 1;
//         } else {
//             obj[temp_arr[i]] = 1;
//         }
//     }

//     // 补充一个总数
//     // 暂时这样写，有更好的写法再说
//     obj.全部文章 = data.length

//     // 根据属性值排序

//     const sortObj = (obj) => {
//         // 降序排序value值
//         let sortValue = Object.values(obj).sort((a, b) => {
//             return b - a;
//         })
//         // 创建结果数组
//         let res = {}
//         // keys数组
//         let keys = Object.keys(obj);
//         // 给value值赋值相应keys值
//         for (let i in sortValue) {
//             // console.log(i);
//             keys.forEach((item) => {
//                 if (sortValue[i] === obj[item]) {
//                     res[item] = sortValue[i];
//                 }
//             })
//         }
//         return res;
//     }

//     // 最后，把数据赋值给外部对象
//     tags.value = sortObj(obj)

// }

// getALLTags(posts)

// 所有博客中提取文章分类


// 将对象转为方便处理的数组
// const tags_arr = Object.entries(tags.value);



// 定义函数 - 从原始数组中提取文章的分类
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

// 定义分类后的数据
const sortedPosts = ref([])
// 实际展示的数据
const showedPosts = ref([])


// 分页函数

const paginate = (data, page, pageSize) => {


    let start = (page - 1) * pageSize;
    let end = start + pageSize;

    return data.slice(start, end);
}

// 使用示例
const currentPage = ref(1);
const pageSize = ref(12);



const pagesTotal = ref(0)


const getPagesTotal = (data, pageSize) => {
    pagesTotal.value = Math.ceil(data.length / pageSize)
    return Math.ceil(data.length / pageSize)
}

getPagesTotal(posts, pageSize.value)


// 通过 分类名 筛选文章
const sort = (category) => {

    let res = []
    if (category == '最新') {
        // 返回全部文章
        res = posts
    } else {
        // 开始筛选文章
        res = posts.filter((item, index) => item.frontmatter.category == category)
    }

    sortedPosts.value = res

    showedPosts.value = paginate(res, currentPage.value, pageSize.value)



    // showData.value = res.slice(0, pageSize.value)
}
// 初始化数据
sort('最新')




export const useBokeStore = defineStore('boke', {
    state: () => ({
        // tags: tags_arr,
        // nowTag: tags_arr[0][0],
        categories: categories,
        sortedPosts: sortedPosts,
        showedPosts: showedPosts,
        nowCategory: categories[0],
        pagesTotal: pagesTotal,
        currentPage: currentPage,
        pageSize: pageSize,


    }),
    actions: {
        changeNowCategory(mo) {
            this.nowCategory = mo
            sort(mo)
            // 更新页面
            this.showedPosts = paginate(sortedPosts.value, 1, this.pageSize)
            this.pagesTotal = getPagesTotal(sortedPosts.value, pageSize.value)

            // 文章分类改变时，将底部当前页复位为 1 
            this.currentPage = 1

        },
        changeCurrentPage(mo) {
            // 如果当前页码超过最大页码数时，等于最大页码数
            if (mo > this.pagesTotal) {
                mo = this.pagesTotal
            }
            // 如果当前页码小于 1 时，等于 1
            if (mo < 1) {
                mo = 1
            }


            this.showedPosts = paginate(sortedPosts.value, mo, this.pageSize)
            this.currentPage = mo

        },

        changeNowTag(tag) {
            this.nowTag = tag
            sort(tag)
            this.showedPosts = showedPosts.value

        }

    }
})