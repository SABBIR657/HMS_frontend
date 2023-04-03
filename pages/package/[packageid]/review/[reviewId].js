import { useRouter } from "next/router";

function Review(){
      const router = useRouter()
      const {packageid, reviewId} = router.query

      return <h1>Review {reviewId} for Package {packageid}</h1>
}

export default Review