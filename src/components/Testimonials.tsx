import React, { useEffect, useState } from 'react';
import Video1 from '../assets/images/testimonials/luiza-fraga.webp';
import Video2 from '../assets/images/testimonials/irene-duvelius.webp';
import Video3 from '../assets/images/testimonials/anacleto-ribeiro.webp';
import Video4 from '../assets/images/testimonials/adam-josef.webp';
import PlayBtn from '../assets/images/play-button.svg';
import InfoBtn from '../assets/images/info.svg';

interface Video {
	title: string;
	description?: string;
	thumb: string;
	youtube: string;
}

const Testimonials = () => {

	const videos: Video[] = [
		{
			"title": 'Luiza Fraga',
			"thumb": Video1,
			"youtube": "Rdd549k4d1k"
		},
		{
			"title": 'Irene Duvelius',
			"thumb": Video2,
			"youtube": "MrH1un8Tly8"
		},
		{
			"title": 'Anacleto Ribeiro',
			"thumb": Video3,
			"youtube": "UTuiEn1-hFo"
		},
		{
			"title": 'Adam Josef',
			"thumb": Video4,
			"youtube": "syT_W8PFZNw"
		},
	];

	const [showModal, setShowModal] = useState(false);
	const [currentVideo, setCurrentVideo] = useState<string>('Rdd549k4d1k');
	const toggleVideoModal = () => setShowModal(!showModal);
	const toggleCurrentVideo = (videoId: string) => setCurrentVideo(videoId);
    const pageTitle = 'Histórias de Sucesso';
    const closeModal = 'Fechar';

	useEffect(() => {
		const modal = document.getElementById("video-modal");

		if (modal) {
			if (showModal) {
				modal.classList.add("opacity-100", "scale-100");
				modal.classList.remove("opacity-0", "scale-90");
			} else {
				modal.classList.add("opacity-0", "scale-90");
				modal.classList.remove("opacity-100", "scale-100");
			}
		}
	}, [showModal]);

	return (
        <>
		<div className="w-full bg-gray-900 py-8 lg:py-16 flex items-center justify-center flex-col">
            <div className="max-w-[1200px] grid lg:grid-cols-3 gap-4 lg:gap-12 max-lg:p-8">
                <div className="flex items-center justify-start flex-col text-center lg:text-left gap-2 xl:gap-4 text-white font-poppins">
                    <h2 className="text-3xl lg:text-5xl font-bold max-w-2xl lg:max-w-2xl">{ pageTitle }</h2>
                    <p className="max-w-lg lg:text-lg">Conheça aqueles que <b>acreditaram</b> e <b>conquistaram!</b> Nossos <b>depoimentos</b> são a prova de que a <b>{process.env.REACT_APP_NAME}</b> é a porta de entrada para carreiras <b>extraordinárias</b>.</p>
                    <div className="flex items-start justifty-center flex-row gap-2 text-sm opacity-50 lg:mt-4 lg:pr-8 xl:pr-16">
                        <img className="w-6 h-6 object-contain" src={InfoBtn} alt="Dica" />
                        <p><b>Dica:</b> Clique na imagem para assistir o vídeo do depoimento!</p>
                    </div>
                </div>
                <div className="w-full grid md:grid-cols-2 gap-4 lg:col-span-2" id="videos">
                    {videos.map((video, index) => (
                        <div className="relative border-2 lg:border-2 border-orange-500 lg:border-slate-800 rounded-md shadow-lg hover:shadow-xl overflow-hidden cursor-pointer group" key={index} onClick={() => {toggleVideoModal(); toggleCurrentVideo(video.youtube)}}>
                            <div className="p-2 absolute group-hover:hidden top-0 left-0 w-full h-full bg-black text-white bg-opacity-60 flex flex-col items-center text-center justify-center">
                                <h3 className="font-poppins font-bold text-shadow text-md md:text-xl lg:text-3xl xl:text-4xl">{ video.title }</h3>
                                {video.description && <p className="font-roboto text-sm md:text-md lg:text-xl">{ video.description }</p>}
                            </div>
                            <div className="w-full">
                                <img src={video.thumb} alt={video.title} className="w-full float-left block" />
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full transition-opacity bg-orange-500 bg-opacity-80 flex items-center justify-center">
                                <img src={PlayBtn} alt={video.title} className="w-20" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
		</div>
        {showModal && (
            <div className="fixed inset-0 top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex flex-col gap-4 items-center justify-center z-50" id="video-modal">
                <div className="relative bg-white shadow-md border-2 border-white w-5/6 md:w-2/3 lg:w-1/2">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
							id="ytplayer"
							title={process.env.REACT_APP_NAME}
                            allowFullScreen
                            src={`https://www.youtube.com/embed/${currentVideo}?rel=0&showinfo=0`}
                            allow="autoplay"
                        >
                        </iframe>
                    </div>
                </div>
                <div className="border-4 border-white font-poppins font-bold text-md uppercase py-3 px-4 rounded text-white hover:cursor-pointer hover:bg-white hover:text-black" onClick={toggleVideoModal}>{closeModal}</div>
            </div>
        )}
        </>
	)
}

export default Testimonials;