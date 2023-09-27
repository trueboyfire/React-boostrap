import { Button, Card } from "react-bootstrap";

interface Props {
  data: any;
}
export default function BlogItem(props: Props) {
  let { data } = props;
  const show=(content:string)=>{
    alert(content);
  }
  return (
    <Card style={{width: "100%", padding: 0, borderRadius: 4,marginBottom:"20px"}}>
      <img src={data?.image} alt="" width={"100%"} height={200} style={{borderTopLeftRadius: 10, borderTopRightRadius: 10}} />
      <div style={{ padding: 10, textAlign: 'start' }}>
        <h5 style={{textTransform: 'capitalize', lineHeight: 1.0}} >{data?.title}</h5>
        <span style={{fontSize: "0.75rem"}} >{new Date(data?.date).toLocaleDateString()}</span>
        <p style={{fontSize: "1.0rem"}}>{data?.summary}</p>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center" }}>
            <img src={data?.author?.image} alt="" width={48} height={48} style={{borderRadius:24}} />
            <div style={{textOverflow: "ellipsis"}}>
                <strong>{data?.author?.name}</strong> 
                {/* <span>{data?.author?.email}</span> */}
            </div>
          </div>
          <Button onClick={() => show(data?.content)} color="primary" >learn more</Button>
        </div>
      </div>
    </Card>
  );
}
