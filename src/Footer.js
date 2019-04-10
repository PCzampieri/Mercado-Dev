import React from 'react'
import { deflate } from 'zlib';

const Footer = (props) => {
    return (
        <footer className="py-5 bg-dark mt-4">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; DevPleno.com 2019 by Cezar Zampieri</p>
            </div>
        </footer>
    )
}
export default Footer