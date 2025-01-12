'use client'

import { css } from 'styled-system/css'
import ProfileIcon from '../icon/ProfileIcon'
export default function Header() {
    return (
        <div className={css({ "display": "flex", "padding": "1.25rem", "flexDirection": "row", "justifyContent": "space-between" })}>
            <div className={css({ "display": "flex", "flexDirection": "column" })}>
                <p className={css({ "fontWeight": 700, color: "#111827" })}>
                    test
                </p>
                <p className={css({ "fontSize": "0.75rem", "lineHeight": "1rem", "color": "#6B7280" })}>지금 나의 건강 상태를 확인하세요!</p>
            </div>
            <div className={css({ display: "flex" })}>
                <ProfileIcon />
            </div>
        </div>
    )
}
