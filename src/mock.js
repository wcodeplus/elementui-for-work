import Mock from 'mockjs'

const Random = Mock.Random

// 登录
Mock.mock('/api/login', 'post', (option) => {
  let { username, password } = JSON.parse(option.body)
  return (username === 'admin' && password === 'admin')
})

// 用户数据
const userData = () => {
  // let users = []
  let data = {
    code: "1",
    message: "用户数据获取成功！",
    pagination: {
      total: 105,
      size: 10,
      current: 1
    },
    users: [],
  }
  for (let i = 0; i < 105; i++) {
    let user = {
      'id': i + 1,
      'date': Random.date('yyyy-MM-dd'),
      'name': Random.cname(),
      'address': Mock.mock('@county(true)'),
      'phone': Mock.mock(/^1[0-9]{10}$/),
      'status': Random.integer(0, 1)
    }
    data.users.push(user)
  }
  return data
}
Mock.mock('/api/users', userData)

// 文章数据
const articleData = () => {
  let articles = []
  for (let i = 0; i < 20; i++) {
    let article = {
      'id': i + 1,
      'date': Random.date('yyyy-MM-dd'),
      'title': Random.csentence(),
      'author': Random.cname(),
      'content': Random.csentence(),
      'status': Random.integer(0, 1)
    }
    articles.push(article)
  }
  return articles
}
Mock.mock('/api/articles', articleData)
