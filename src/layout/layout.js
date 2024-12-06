//layout.js
import  "bootstrap/dist/css/bootstrap.min.css"
import AddBootstrap from "@/app/AddBootstrap";

export default function RootLayout({ children }) {
  return (
    <>
    {/* <html lang="en"> */}
      {/* <body > */}
        <AddBootstrap/>
        {children}
        {/* </body> */}
    {/* </html> */}
    </>
  );
}