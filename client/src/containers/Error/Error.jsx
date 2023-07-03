import Layout from "../../components/Layout/Layout"
import ErrorUI from "./ErrorUI"
export default function Error() {
    return (
        <Layout showComponent={false}>
            <ErrorUI/>
        </Layout>
    )
}
