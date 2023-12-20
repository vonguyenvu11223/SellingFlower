import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div
      style={{
        width: "70%",
        margin: "0 auto",
        textAlign: "center",
        marginTop: "40px",
      }}>
      <Image
        src={
          "https://static-xf1.vietnix.vn/wp-content/uploads/2021/03/404.jpg.webp"
        }
        alt="Image"
        width={400}
        height={300}
      />
      <Link
        href="/"
        style={{
          display: "block",
          marginTop: "30px",
          textDecoration: "none",
          fontSize: "24px",
          color: "#ef6056",
        }}>
        Quay về trang chủ
      </Link>
    </div>
  );
}
