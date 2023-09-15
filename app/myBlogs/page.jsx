import { BasicCard, Heading } from "../components";

export default function page() {
  return (
    <div>
        <Heading txt={"Uploded Blogs"}/>
        <BasicCard/>
        <Heading txt={"Blogs In Draft"}/>
        <BasicCard/>
    </div>
  )
}
