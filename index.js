
        // Simple Navigation Logic
        function showPanel(id) {
            document.querySelectorAll('.panel[id^="panel-"]').forEach(p => p.classList.add('hidden'));
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            
            document.getElementById('panel-' + id).classList.remove('hidden');
            event.currentTarget.classList.add('active');
        }

        // Camera Simulation
        const camInput = document.getElementById('camera');
        const btnCam = document.getElementById('btn-open-camera');
        const itemCard = document.getElementById('item-card');
        const previewText = document.getElementById('preview-text');
        const capturedImg = document.getElementById('captured-image');
        const preview = document.getElementById('preview');

        btnCam.addEventListener('click', () => camInput.click());

        camInput.addEventListener('change', (e) => {
            if(e.target.files.length > 0) {
                const url = URL.createObjectURL(e.target.files[0]);
                capturedImg.src = url;
                capturedImg.classList.remove('hidden');
                previewText.classList.add('hidden');
                
                // Simulate barcode detection
                document.getElementById('selected-id').innerText = "#45621";
                itemCard.classList.remove('hidden');
                
                // Scroll to item card
                setTimeout(() => {
                    itemCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            }
        });

        document.getElementById('confirm-update').addEventListener('click', () => {
            const status = document.getElementById('status').value;
            const statusText = document.getElementById('status').options[document.getElementById('status').selectedIndex].text;
            
            // Show success message
            alert('✓ Status Updated Successfully!\nPallet #45621 is now: ' + statusText);
            
            // Reset UI
            itemCard.classList.add('hidden');
            capturedImg.classList.add('hidden');
            previewText.classList.remove('hidden');
            document.getElementById('selected-id').innerText = "—";
            camInput.value = '';
        });

        document.getElementById('cancel-update').addEventListener('click', () => {
            itemCard.classList.add('hidden');
            document.getElementById('selected-id').innerText = "—";
        });

        // Clear history
        document.getElementById('clear-history').addEventListener('click', () => {
            if(confirm('Clear all update history?')) {
                document.getElementById('history').innerHTML = '<div class="muted" style="text-align: center; padding: 20px;">No recent updates</div>';
            }
        });

        // Search functionality (optional enhancement)
        document.getElementById('search-go').addEventListener('click', () => {
            const query = document.getElementById('q').value.trim();
            if(query) {
                document.getElementById('search-results').innerHTML = `
                    <div class="list-item">
                        <div>
                            <div style="font-weight: 700; font-size: 16px;">Pallet ${query}</div>
                            <div class="muted small">Aisle 2 · Rack C</div>
                        </div>
                        <div class="status-chip in-stock">In Stock</div>
                    </div>
                `;
            }
        });