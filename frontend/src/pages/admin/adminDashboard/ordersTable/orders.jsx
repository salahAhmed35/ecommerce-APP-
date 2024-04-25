import React from 'react';

const OrdersTable = () => {
    return (
        <div>
            <div class="relative overflow-x-auto">
            <div className='px-6 py-3 text-2xl font-bold bg-white '><h2>Latest orders</h2></div>
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 bg-white dark:bg-gray-700 dark:text-gray-400">
                        <tr className=''>
                            <th scope="col" class="px-6 py-3 text-base font-semibold">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3 text-base font-semibold">
                                Order status
                            </th>
                            <th scope="col" class="px-6 py-3 text-base font-semibold">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3 text-base font-semibold">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-500 dark:border-gray-700 text-base font-semibold">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </td>
                            <td class="px-6 py-4 status">
                                <span className='px-2 py-1 text-green-900 bg-green-200 rounded'>Delivered</span>
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-500 dark:border-gray-700 text-base font-semibold">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4 status" >
                                <span className='px-2 py-1 text-red-900 bg-red-200 rounded'>cencelled </span>
                            </td>
                            <td class="px-6 py-4">
                                Laptop PC
                            </td>
                            <td class="px-6 py-4">
                                $1999
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-500 dark:border-gray-700 text-base font-semibold">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td class="px-6 py-4 status">
                                <span className='px-2 py-1 text-orange-900 bg-orange-200 rounded'>Pending</span>
                            </td>
                            <td class="px-6 py-4">
                                Accessories
                            </td>
                            <td class="px-6 py-4">
                                $99
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};
export default OrdersTable;


/*
*/