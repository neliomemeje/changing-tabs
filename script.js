const tabsEl = document.querySelector(".tabs")
const btnEl = document.querySelectorAll(".btn");
const contentEl = document.querySelectorAll(".content")

tabsEl.addEventListener("click", (e) => {
	const id = e.target.dataset.id;

	if(id){
		btnEl.forEach(btn => {
			btn.classList.remove("active")
		})
		e.target.classList.add("active");
		contentEl.forEach(content => {
		content.classList.remove("active");
		})
		const pageId = document.getElementById(id);
		pageId.classList.add("active")
	}
})

