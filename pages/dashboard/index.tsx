import Layout from "@/components/Layout";

export default function Dashboard() {
    return (
        <Layout>
            <main>
                <section className='container mx-auto'>
                    <div className='h-screen w-full mt-16'>
                        <div style={{ marginLeft: '180px' }}>
                            <h3 
                                className='text-gray-600 font-bold text-xl cursor-cell hover:text-teal'
                            >
                                Dashboard
                            </h3>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
