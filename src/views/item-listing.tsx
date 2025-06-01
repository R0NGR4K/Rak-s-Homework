export const ItemListing = () => {
    const users = [
        {id: 1, name: 'john', age 12, gender:"M",},
        {id: 2, name: 'Devid', age:22, gender:"M",},
        {id: 3, name: 'Kimmy', age:42, gender:"F"},
        {id: 4, name: 'Pheakdey', age: 32, gender:"M"},
        {id: 5, name: 'Jom pa', age:6, gender: "F" }
    ];
    return <>
    {users.map((user) => (
        <p>Username: {user.name}</p>
    ))}
    </>
}

export default ItemListing;