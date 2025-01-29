import React, { useContext } from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { products } from '@/assets/assets'
import { AppContext } from '@/context/AppContext'
import DisplayProduct from '@/components/DisplayProduct'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {

    const id = (await params).id

    const productInfo = products?.find((i: any) => i._id === Number(id))

    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Trang Chủ</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/san-pham">Sản phẩm</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{productInfo?.name}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <DisplayProduct productInfo={productInfo} />
        </div>
    )
}

export default page
