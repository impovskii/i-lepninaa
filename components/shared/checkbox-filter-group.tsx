import { FilterChecboxProps } from './filter-checkbox'

type Item = FilterChecboxProps
interface Props {
	title: string
	items: Item[]
	defaultItems?: Item[]
	limit?: number
	searchInputPlaceholder?: string
	onChange?: (values: string[]) => void
	defaultValue?: string[]
	className?: string
}

export const CheckboxFilterGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = 'Поиск...',
	className,
	onChange,
	defaultValue,
}) => {
	return <div className={className}>
		<p className='font-bold mb-3'>{title}</p>
	</div>
}
