document.addEventListener('DOMContentLoaded', function () {
	// Modal logic for "View Details"
	const modal = document.getElementById('detailsModal');
	const modalTitle = document.getElementById('modalTitle');
	const modalDesc = document.getElementById('modalDesc');
	const modalImg = document.getElementById('modalImg');

	function openModal(title, desc, img) {
		modalTitle.textContent = title;
		modalDesc.textContent = desc;
		modalImg.src = img || '';
		modal.setAttribute('aria-hidden', 'false');
	}

	function closeModal() {
		modal.setAttribute('aria-hidden', 'true');
	}

	document.querySelectorAll('.card .btn').forEach(btn => {
		btn.addEventListener('click', function () {
			const title = this.dataset.title || 'Model';
			const desc = this.dataset.desc || '';
			const img = this.dataset.img || '';
			openModal(title, desc, img);
		});
	});

	document.querySelectorAll('.modal-close').forEach(el => el.addEventListener('click', closeModal));

	modal.addEventListener('click', function (e) {
		if (e.target === modal) closeModal();
	});

	// Simple hero background rotation (subtle carousel)
	const hero = document.querySelector('.hero');
	const images = [
		'https://images.unsplash.com/photo-1549921296-3d1227a7ea6b?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc',
		'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=def',
		'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=ghi'
	];
	let idx = 0;
	if (hero) {
		setInterval(() => {
			idx = (idx + 1) % images.length;
			hero.style.backgroundImage = `linear-gradient(180deg,rgba(2,6,23,0.35),rgba(2,6,23,0.6)),url('${images[idx]}')`;
		}, 6000);
	}
});
