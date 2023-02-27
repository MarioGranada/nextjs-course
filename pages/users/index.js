const UsersPage = ({users}) => <>
<h1>List of Users</h1>
<div>
    {users.map(item => <div key={item.id}>
<span>{item.id} - {item.name} - {item.email} </span>
    </div> )}
</div>
</>;



export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: {
            users: data
        }
    }
}

export default UsersPage;