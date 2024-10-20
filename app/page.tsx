import { Container } from '@/components/shared/container'
import { Filters } from '@/components/shared/filters'
import { Title } from '@/components/shared/title'
import { TopBar } from '@/components/shared/top-bar'
import { Header } from '../components/shared/header'

export default function Home() {
	return (
		<main className='min-h-screen bg-white rounded-3xl'>
			<Header />
			<Container className='mt-10'>
				<Title text='Все товары' className='font-extrabold' size='lg' />
			</Container>
			<TopBar />
			<Container className='pb-14'>
				<div className='flex gap-[60px]'>
					{/* Фильтрация */}
					<div className='w-[250px]'>
						<Filters />
					</div>
					{/* Список товаров */}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>Список товаров</div>
					</div>
				</div>
			</Container>
		</main>
	)
}
