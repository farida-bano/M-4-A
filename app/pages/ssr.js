// pages/ssr.js

export async function getServerSideProps() {
     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
     const posts = await res.json();
   
     return { props: { posts } };
   }
   
   export default function SSRPage({ posts }) {
     return (
       <div>
         <h1>Server-Side Rendered Posts</h1>
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
   