export default function SectionApp() {
    return (
        <section className="bg-purple-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div>
                        <h3 className="text-4xl font-bold mb-2">360000</h3>
                        <p className="text-sm uppercase">Téléchargements de nos applications</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold mb-2">259000</h3>
                        <p className="text-sm uppercase">Utilisateurs</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold mb-2">165720</h3>
                        <p className="text-sm uppercase">Souscriptions d'abonnements</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold mb-2">1800</h3>
                        <p className="text-sm uppercase">Heures de visionnage de catalogue</p>
                    </div>
                </div>
            </div>
        </section>
    )
}