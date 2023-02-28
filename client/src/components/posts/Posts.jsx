import Post from "../post/Post"
import "./posts.scss"

const posts = [{
  id : 1,
  name : "John Doe",
  userId : 1,
  profilePic:"https://images.pexels.com/photos/6968548/pexels-photo-6968548.jpeg?auto=compress&cs=tinysrgb&w=1600",
  desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, hic!",
  img : "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
},
{
  id : 2,
  name : "John Doe",
  userId : 1,
  profilePic:"https://images.pexels.com/photos/6968548/pexels-photo-6968548.jpeg?auto=compress&cs=tinysrgb&w=1600",
  desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quae blanditiis harum ut sunt molestias exercitationem libero quaerat? Molestiae labore, expedita maiores quidem alias fuga magnam laborum incidunt. Officiis, explicabo molestiae? Voluptas eligendi modi odit quidem nemo? Temporibus, a officiis.",
},
{
  id : 3,
  name : "John Doe",
  userId : 1,
  profilePic:"https://images.pexels.com/photos/6968548/pexels-photo-6968548.jpeg?auto=compress&cs=tinysrgb&w=1600",
  desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, hic!",
  img : "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
},
{
  id : 4,
  name : "John Doe",
  userId : 1,
  profilePic:"https://images.pexels.com/photos/6968548/pexels-photo-6968548.jpeg?auto=compress&cs=tinysrgb&w=1600",
  desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, hic!",
  img : "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
},
{
  id : 5,
  name : "John Doe",
  userId : 1,
  profilePic:"https://images.pexels.com/photos/6968548/pexels-photo-6968548.jpeg?auto=compress&cs=tinysrgb&w=1600",
  desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, hic!",
  img : "https://images.pexels.com/photos/5011748/pexels-photo-5011748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},

]

const Posts = () => {
  return (
    <div className="posts">
      {posts.map(post => (
          <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts
