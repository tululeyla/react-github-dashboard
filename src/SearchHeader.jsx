export default function SearchHeader({search})
{
   
    return (
       <header>
        <form action="#">
         <input type="text" placeholder="Enter username" />
         <button type="submit" onClick={
            (e)=>{
               const search = e.target.value.trim();
               console.log("leyla is amazing")
            }
         }>Search</button>
         </form>
       </header>
    );
}