import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import Button from 'react-bootstrap/Button'
import Layout, { siteTitle } from '../../components/Layout/Layout'
import { BsFillGrid3X3GapFill } from 'react-icons/bs';

const List: NextPage = () => {
    const router: NextRouter = useRouter();

    const handleClick = (e: any, path: string) => {
        e.preventDefault();

        if (path === '/employee/add') {
            router.push(path);
        }
    }

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1>Manage Employee</h1>
            <div className="action-container">
                <Button onClick={(e) => handleClick(e, '/employee/add')}>Add Employee</Button>
                <Button aria-label='Grid View'><BsFillGrid3X3GapFill></BsFillGrid3X3GapFill></Button>
            </div>
            <ul>
                <li>
                    <div>David</div>
                    <Link href='/employee/edit/1'>Edit</Link>
                </li>
                <li>
                    <div>Casy</div>
                    <Link href='/employee/edit/2'>Edit</Link>
                </li>
            </ul>
        </Layout>
    )
}

export default List