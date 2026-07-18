export default function Background() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        backgroundColor: "#0B0F19",
        backgroundImage: `
          linear-gradient(rgba(0,212,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.08) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    />
  );
}