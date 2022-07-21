import { NextPage } from "next"
import { NextRouter, useRouter } from "next/router"
import Layout from "../../../components/Layout/Layout"

const Detail: NextPage = () => {
    const router: NextRouter = useRouter();
    // const employeeId: number = router.query.employeeId;

    // send a request to the backend API
    // to fetch the employee data with employeeId

    return (
        <Layout>
            <h1>Detail Page</h1>
        </Layout>
    )
}

export default Detail;