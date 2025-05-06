import { createContentLoader } from 'vitepress'



export default createContentLoader('posts/*.md', {
    // includeSrc: true, // 包含原始 markdown 源?
    excerpt: true,    // 包含摘录?
    transform(rawData) {



        for (let i = 0; i < rawData.length; i++) {
            // 阅读时间
            // let readTime = reckonReadTime(rawData[i].src)
            // rawData[i].frontmatter.readTimeNum = readTime
            // 文件名称
            let filename = rawData[i].url
            filename = filename.split('posts/')[1]
            filename = filename.split('.ht')[0]
            rawData[i].frontmatter.filename = filename
            // 文章标题
            rawData[i].frontmatter.title = filename.split(' ')[1]
            // 文章ID
            rawData[i].frontmatter.moid = filename.split(' ')[0]

            // 文章的时间戳
            // rawData[i].frontmatter.time = getArticleTime(filename.split(' ')[0])

            if (rawData[i].frontmatter.category) {
                // categoryArr.push(rawData[i].frontmatter.category)

            } else {
                rawData[i].frontmatter.category = '未分类'
            }
            // 返回格式化的时间数据
            // rawData[i].frontmatter.time = rawData[i].frontmatter.moid.slice(0, 6).replace(/(\d{2})(\d{2})(\d{2})/, '20$1-$2-$3');
            rawData[i].frontmatter.time = rawData[i].frontmatter.moid.slice(0, 6);




        }

        // 将数据倒序后返回，保证最新的文章在前
        return rawData
    }
})