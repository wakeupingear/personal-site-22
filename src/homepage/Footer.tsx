import React from 'react';
import { FULL_NAME } from '../../utils/constants';

export default function Footer() {
    return (
        <div className="flex justify-center text-center bg-orange-200 mt-4 mx-8 p-4 rounded-t-xl shadow-md mt-auto">
            <h2>
                {FULL_NAME} - {new Date().getFullYear()}
            </h2>
        </div>
    );
}
