import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const Cards = ({ children, className }: { children: ReactNode, className?: any }) => {
    return (
        <div className={cn(className, 'border bg-primary-foreground hover:bg-secondary border-gray-300 rounded-lg p-3')}>
            {children}
        </div>
    )
}

export default Cards