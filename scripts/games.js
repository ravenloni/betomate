import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
(async () => {
    const supabaseUrl = 'https://jvivowfxpvlxxjsxawoa.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2aXZvd2Z4cHZseHhqc3hhd29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzODgzMjUsImV4cCI6MjA1NDk2NDMyNX0.wZsW4GxkkOO_7iAiTXrr0gnOqZ0gu3PJSSdvzaw_NUw';
    const supabase = createClient(supabaseUrl, supabaseKey);
  
    document.getElementById('submitButton').addEventListener('click', async function (event) {
        event.preventDefault();
    
        const selectedDesserts = document.querySelectorAll('input[name="dessert"]:checked');
        // Validar que solo haya uno seleccionado
        if (selectedDesserts.length !== 1) {
          alert('Please select only one game.');
          return;
        }
    
        try {
          // Obtener el juego seleccionado
          const selectedGame = selectedDesserts[0].value;
    
          // Guardar en Supabase
          const { data, error } = await supabase
            .from('citas')
            .insert([{ juego: selectedGame }]);
    
          if (error) {
            throw error;
          }
          console.log('Juego guardado:', data); // Para asegurarte de que data se está usando
          // Redirige a otra página después de guardar
          window.location.href = 'activities.html';
        } catch (error) {
          console.error('Error al guardar el juego:', error);
          alert('Hubo un error al guardar el juego.');
        }
      });
  })();
  