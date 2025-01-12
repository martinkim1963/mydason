import Header from "@/components/common/Header"
import { css } from "styled-system/css"


export default function Page() {
    return (
        <div
            className={css({
                display: 'flex',
                padding: "1rem",
                flexDir: 'column',
                height: '100%',
                bg: '#EAEBF0',
                gap: "1rem",
                overflow: 'auto',
            })}
        >
            <Header />
            <div className={css({ display: 'flex' })}>
                <div className={css({
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',

                    gap: '1rem',
                    '@media (max-width: 360px)': {
                        gridTemplateColumns: '1fr',
                    },
                })}>
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                </div>
            </div>
        </div>
    )
}
