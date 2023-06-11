import { Button, Spin, Upload } from "antd";


function Vedio() {
    return (
        <div 
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Upload.Dragger
                multiple
                listType="picture" 
                action={'http://localhost:700'}
                // accept=".png" only accepting ending files
                beforeUpload={(file) =>{
                    console.log({ file });
                    return true;
                }}
                defaultFileList={[
                    {
                        uid: 'abc',
                        name: 'existing_file.png',
                        status: 'uploading',
                        percent: 50,
                        url: 'https://www.google.com/',
                    },
                ]}
                iconRender={() => {
                    return <Spin></Spin>
                }}
                // itemRender={(existingComp, file) => {
                //     return <p>{file.name}</p>;
                // }}
                progress={{
                    strokeWidth: 3,
                    strokeColor:{
                        '0%':'#f0f',
                        '100%':'#ff0',
                    },
                    style:{top:12},
                }}
                >
                <h1>drag vedio here</h1>
                <Button>Upload vedio</Button>
            </Upload.Dragger>
        </div>
    );
}
export default Vedio;
 
