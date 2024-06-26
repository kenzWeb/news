import React, {useRef} from 'react'
import {useTheme} from '../../../../app/providers/ThemeProvider'
import styles from './styles.module.css'

interface Props {
	children: React.ReactElement
	step?: number
	isDark: boolean
}

export default function Slider({children, step = 150}: Props) {
	const {isDark} = useTheme()
	const sliderRef = useRef<HTMLElement | null>(null)

	const scrollLeft = () => {
		if (!sliderRef.current) return
		sliderRef.current.scrollLeft -= step
	}

	const scrollRight = () => {
		if (!sliderRef.current) return
		sliderRef.current.scrollLeft += step
	}
	return (
		<div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
			<button onClick={scrollLeft} className={styles.arrow}>
				{'<'}
			</button>
			{React.cloneElement(children, {ref: sliderRef})}
			<button onClick={scrollRight} className={styles.arrow}>
				{'>'}
			</button>
		</div>
	)
}
