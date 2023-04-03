import { useRouter } from "next/router"

function PackageDetail(){
    const router = useRouter()
    const packageId = router.query.packageid
    return <h2>Details about Package {packageId}</h2>
}

export default PackageDetail

