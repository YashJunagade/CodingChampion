/* eslint-disable react/prop-types */
function NavLink({ linkRoute, linkName }) {
    return (
        <>
            <li className="text-center  md:mx-4 lg:mx-8">
                <a
                    href={linkRoute}
                    className="px-2 py-2 hover:bg-accent hover:text-white hover:text-bold cursor-pointer rounded transition ease-in-out duration-200"
                >
                    {linkName}
                </a>
            </li>
        </>
    );
}

export default NavLink;
