import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PROJET_STATUS_CLASS_MAP, PROJET_STATUS_TEXT_MAP } from "@/Constants";

export default function Show({ auth, projet }){
    return(
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {`Projet "${projet.name}"`}
        </h2>}
        >
            <Head title={`Projet "${projet.name}"`} />
            <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 text-gray-900 dark:text-gray-100">
                                    <img 
                                        src={projet.image_path}
                                        alt=""
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                                <div> 
                                    <div className="grid gap-1 grid-cols-2 mt-2">
                                        <div>
                                            <div>
                                                <label className="font-bold text-lg text-red-50">Projet ID</label>
                                                <p className="mt-1 text-red-50">{projet.id}</p>
                                            </div>
                                            <div>
                                                <label className="font-bold text-lg text-red-50">Projet Name</label>
                                                <p className="mt-1 text-red-50">{projet.name}</p>
                                            </div>
                                            <div className="mt-4">
                                                <label className="font-bold text-lg text-red-50">
                                                    Projet Status
                                                </label>
                                                <p className="mt-1 text-red-50">
                                                    <span className={
                                                        "px-2 py-1 rounded text-white" + 
                                                        PROJET_STATUS_CLASS_MAP[projet.status]
                                                     }
                                                    >
                                                        {PROJET_STATUS_TEXT_MAP[projet.status]}
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="mt-4">
                                                <label className="font-bold text-lg text-red-50">
                                                    Created By
                                                </label>
                                                <p className="mt-1 text-red-50">
                                                   {projet.createdBy.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
            </div>
        </AuthenticatedLayout>
    )
}