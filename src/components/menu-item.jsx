import Link from "next/link";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <div>
      <Link
        href={address}
        className="mx-4 lg:mx-6 hover:text-amber-600  inline-block"
      >
        <Icon className="text-2xl sm:hidden" />
        <span className="hidden sm:inline my-2 text-sm">{title}</span>
      </Link>
    </div>
  );
};

export default MenuItem;
