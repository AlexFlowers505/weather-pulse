import React from 'react'
import LoaderSkeletonBlock from '../views/components/LoaderSkeletonBlock'

export default function generateLoaderSkeletons(blockQnt: number, elmPerBlockQnt: number): React.ReactNode {
    return Array.from({ length: blockQnt }, (_, i) => (
        <React.Fragment key={i}>
            <LoaderSkeletonBlock qnt={elmPerBlockQnt} />
            {i < blockQnt - 1 && <hr className={`border-lineColor mx-2`} />}
        </React.Fragment>
    ))
}