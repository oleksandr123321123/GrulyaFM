// Lightweight Supabase Auth - Fixed version
(function(){
  'use strict';
  
  // Ждем загрузки Supabase
  function waitForSupabase(callback) {
    if (window.supabase) {
      callback();
    } else {
      setTimeout(() => waitForSupabase(callback), 50);
    }
  }
  
  waitForSupabase(function() {
    console.log('✅ Auth module initialized');
    
    const $ = (id) => document.getElementById(id);
    
    // Helper: update button state
    const updateButton = (btn, loading) => {
      if (!btn) return;
      btn.disabled = loading;
      btn.classList.toggle('loading', loading);
    };
    
    // Buttons
    const btnAccount = $('btnAccount');
    const btnSignIn = $('btnSignIn');
    const btnSignUp = $('btnSignUp');
    const btnResetPassword = $('btnResetPassword');
    const btnSignOut = $('btnSignOut');
    const btnSyncNow = $('btnSyncNow');
    const closeAccount = $('closeAccount');

    const authEmail = $('authEmail');
    const authPassword = $('authPassword');

    // Open Account Modal
    if (btnAccount) {
      btnAccount.addEventListener('click', () => {
        const modal = $('accountModal');
        if (modal) {
          modal.classList.add('active');
          updateAuthUI();
        }
      });
    }

    // Close Account Modal
    if (closeAccount) {
      closeAccount.addEventListener('click', () => {
        const modal = $('accountModal');
        if (modal) modal.classList.remove('active');
      });
    }
    
    // Enable Sign In button when fields are filled
    [authEmail, authPassword].forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          const email = authEmail?.value?.trim() || '';
          const password = authPassword?.value || '';
          if (btnSignIn) {
            btnSignIn.disabled = !(email && password);
          }
        });
      }
    });
    
    // Sign In handler
    if (btnSignIn) {
      btnSignIn.addEventListener('click', async () => {
        const email = authEmail?.value?.trim();
        const password = authPassword?.value;
        if (!email || !password) return;
        
        updateButton(btnSignIn, true);
        
        const { error } = await window.supabase.auth.signInWithPassword({
          email,
          password
        });
        
        updateButton(btnSignIn, false);
        
        if (error) {
          alert('Sign in error: ' + error.message);
          console.error('Sign in error:', error);
        } else {
          console.log('✅ Signed in successfully');
          // Close modal
          const modal = $('accountModal');
          if (modal) modal.classList.remove('active');
        }
      });
    }
    
    // Sign Up handler
    if (btnSignUp) {
      btnSignUp.addEventListener('click', async () => {
        const email = authEmail?.value?.trim();
        const password = authPassword?.value;
        if (!email || !password) return;
        
        if (password.length < 6) {
          alert('Password must be at least 6 characters');
          return;
        }
        
        updateButton(btnSignUp, true);
        
        const { error } = await window.supabase.auth.signUp({
          email,
          password
        });
        
        updateButton(btnSignUp, false);
        
        if (error) {
          alert('Sign up error: ' + error.message);
          console.error('Sign up error:', error);
        } else {
          alert('Success! Check your email to confirm your account.');
          console.log('✅ Signed up successfully');
        }
      });
    }
    
    // Reset Password handler
    if (btnResetPassword) {
      btnResetPassword.addEventListener('click', async () => {
        const email = authEmail?.value?.trim();
        if (!email) {
          alert('Please enter your email address');
          return;
        }
        
        updateButton(btnResetPassword, true);
        
        const { error } = await window.supabase.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin
        });
        
        updateButton(btnResetPassword, false);
        
        if (error) {
          alert('Reset password error: ' + error.message);
          console.error('Reset password error:', error);
        } else {
          alert('Password reset email sent! Check your inbox.');
          console.log('✅ Password reset email sent');
        }
      });
    }
    
    // Sign Out handler
    if (btnSignOut) {
      btnSignOut.addEventListener('click', async () => {
        updateButton(btnSignOut, true);
        
        const { error } = await window.supabase.auth.signOut();
        
        updateButton(btnSignOut, false);
        
        if (error) {
          alert('Sign out error: ' + error.message);
          console.error('Sign out error:', error);
        } else {
          console.log('✅ Signed out successfully');
          // Close modal
          const modal = $('accountModal');
          if (modal) modal.classList.remove('active');
        }
      });
    }
    
    // Sync Now handler
    if (btnSyncNow) {
      btnSyncNow.addEventListener('click', async () => {
        if (typeof window.saveToSupabase === 'function') {
          updateButton(btnSyncNow, true);
          await window.saveToSupabase();
          updateButton(btnSyncNow, false);
        } else {
          console.warn('saveToSupabase function not found');
        }
      });
    }
    
    // Update UI based on auth state
    async function updateAuthUI() {
      const { data } = await window.supabase.auth.getUser();
      const user = data?.user;
      
      const signedOut = $('authUnsignedIn');
      const signedIn = $('authSignedIn');
      const userEmail = $('userEmail');
      
      if (user) {
        if (signedOut) signedOut.style.display = 'none';
        if (signedIn) signedIn.style.display = 'block';
        if (userEmail) userEmail.textContent = user.email || user.id;
      } else {
        if (signedOut) signedOut.style.display = 'block';
        if (signedIn) signedIn.style.display = 'none';
      }
    }
    
    // Listen to auth changes
    window.supabase.auth.onAuthStateChange((event) => {
      console.log('🔐 Auth state changed:', event);
      updateAuthUI();
    });
    
    // Initial UI update
    updateAuthUI();
  });
})();
