import { Result } from "antd"
import Item from "antd/es/list/Item"


const Comment = (text, postId) => {
  fetch('/Comment', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Authorozathion': 'Bearer' +localStorage.getItem('jwt')
    },
    body: JSON.stringify([
      postId,
      text
    ]).then(res => res.json())
    .then(Result => {
      console.log(Result)
      const newData = data.map(item => {
        if(item.id == Result.id){
          return Result
        }else {
          return item
        }
      })
      setData(newData)
    }).catch(err =>{
      console.log(err)
    })
  })
  return (
    <div className="Comment">
      <form onSubmit={(e) =>{
        e.preventDefault()
        Comment(e.target[0].value, item.id)
      }}>
        <input type='text' placeholder='add a comment' />
      </form>
    </div>
    
  )
}
export default Comment;