import {
    SearchOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';
import { Dropdown, Space } from "antd";
const items = [
    {
        label: <a href='google.com'>Home</a>
    },
    {
        label: <a href='google.com'>About</a>
    },
    {
        label: <a href='google.com'>Contact</a>
    }
]

const Header = () => {
    return (
        <div>
            <div className="bg-black p-4 md:flex justify-between items-center hidden">
                <div className="flex items-center space-x-5">
                    <h1 className="text-[30px] uppercase font-bold text-red-700 ">
                        Trailermovie
                    </h1>
                    <nav className="flex items-center space-x-4">
                        <a href="" className="text-white">
                            Home
                        </a>
                        <a href="" className="text-white">
                            About
                        </a>
                        <a href="" className="text-white">
                            Contact
                        </a>
                    </nav>
                </div>
                <div className="flex items-center space-x-5">
                    <input
                        type="text"
                        placeholder="Search"
                        className="text-black py-3 px-4"
                    />
                    <button className="rounded-lg bg-red-600 text-white p-2">
                        Search
                    </button>
                </div>
            </div>
            <div className="bg-black p-4 flex justify-between items-center md:hidden">
                <div>
                    <button className='rounded-lg text-white px-3 py-2 text-xl'>
                        <Dropdown menu={{ items }} trigger={'click'}>
                            <Space>
                                <UnorderedListOutlined />
                            </Space>
                        </Dropdown>
                    </button>
                </div>
                <div>
                    <h1 className="text-[30px] uppercase font-bold text-red-700 ">
                        Trailer
                    </h1>
                </div>
                <div>
                    <button className="rounded-lg bg-red-600 text-white px-3 py-2">
                        <SearchOutlined />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
