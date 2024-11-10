// pages/ssg.js

export async function getStaticProps() {
     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
     const posts = await res.json();
   
     return { props: { posts } };
   }
   
   export default function SSGPage({ posts }) {
     return (
       <div>
         <h1>Static Site Generated Posts</h1>
         <ul>
           {posts.map((post) => (
             <li key={post.id}>
               <h3>{post.title}</h3>
               <p>{post.body}</p>
             </li>
           ))}
         </ul>
       </div>
     );
   }
   