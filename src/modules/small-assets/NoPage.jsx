export default function NoPage() {

    // Class name variables
    const containerClassName =
        "flex flex-col justify-center items-center text-center h-full";
    const paragraphClassName =
        "text-2xl";
    return (
        <div className={containerClassName}>
            <p className={paragraphClassName}>The page you are looking for does not exist.</p>
        </div>)
};
  

  