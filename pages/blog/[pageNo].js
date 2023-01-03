import { useRouter } from "next/router";


function pageNo() {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  return (
    <div>
     
      <h1>Hello from {pageNumber}</h1>
    </div>
  );
}

export default pageNo;
