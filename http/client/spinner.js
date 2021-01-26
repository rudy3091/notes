(function () {
	const div = document.createElement("div");
	div.classList.add("spinner");

	const style = document.createElement("style");
	style.textContent = `
	.spinner {
		width: 30px;
		height: 30px;
		border: 5px solid #3498db;
		border-bottom: 5px solid transparent;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		position: absolute;
		top: calc(50% - 20px);
		left: calc(50% - 20px);
	}

	.hidden {
		display: none;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	`
	document.body.appendChild(style);
	document.body.appendChild(div);
})();

