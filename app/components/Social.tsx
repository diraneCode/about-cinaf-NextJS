import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react'

export default function Social() {
    return (
        <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600 mb-4 md:mb-0">© Copyright 2023 - CINAF</p>
                <div className="flex space-x-4">
                    <Link href="#" className="text-orange-500 hover:text-orange-600">
                        <Facebook className="w-6 h-6" />
                        <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="text-orange-500 hover:text-orange-600">
                        <Twitter className="w-6 h-6" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="text-orange-500 hover:text-orange-600">
                        <Linkedin className="w-6 h-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="text-orange-500 hover:text-orange-600">
                        <Youtube className="w-6 h-6" />
                        <span className="sr-only">YouTube</span>
                    </Link>
                    <Link href="#" className="text-orange-500 hover:text-orange-600">
                        <Instagram className="w-6 h-6" />
                        <span className="sr-only">Instagram</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}