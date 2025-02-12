import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
(async () => {
    const supabaseUrl = 'https://jvivowfxpvlxxjsxawoa.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2aXZvd2Z4cHZseHhqc3hhd29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzODgzMjUsImV4cCI6MjA1NDk2NDMyNX0.wZsW4GxkkOO_7iAiTXrr0gnOqZ0gu3PJSSdvzaw_NUw';
    const supabase = createClient(supabaseUrl, supabaseKey);
  
    document.getElementById('submitButton').addEventListener('click', async function (event) {
        event.preventDefault();
    
        const selectedMovies = document.querySelectorAll('input[name="activities"]:checked');
        // Validar que solo haya uno seleccionado
        if (selectedMovies.length !== 1) {
          alert('Please select only one movie.');
          return;
        }
    
        try {
          // Obtener el juego seleccionado
          const selectedMovie = selectedMovies[0].value;
    
          // Guardar en Supabase
          const { data, error } = await supabase
            .from('citas')
            .insert([{ pelicula: selectedMovie }]);
    
          if (error) {
            throw error;
          }
          console.log('Pelicula guardado:', data); // Para asegurarte de que data se está usando
          // Redirige a otra página después de guardar
          window.location.href = 'lastpage.html';
        } catch (error) {
          console.error('Error al guardar la pelicula:', error);
          alert('Hubo un error al guardar la pelicula.');
        }
      });
  })();