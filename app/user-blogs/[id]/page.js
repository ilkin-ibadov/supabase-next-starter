const Page = async ({ params }) => {
    const { id } = await params
    return (
        <div>User blog: {id}</div>
    )
}

export default Page