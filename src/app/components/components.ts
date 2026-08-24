import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface SkillCategory {
  name: string;
  skills: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './components.html'
})
export class AppComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  formSubmitting = signal(false);
  formSubmitted = signal(false);

  contactForm: FormGroup;

  services: Service[] = [
    {
      icon: 'code',
      title: 'Frontend Development',
      description: 'Building responsive, high-performance web applications using Angular, TypeScript, and modern CSS frameworks.'
    },
    {
      icon: 'check-circle',
      title: 'Test Automation',
      description: 'Designing robust automated test suites with Playwright to ensure seamless UI and application stability.'
    },
    {
      icon: 'server',
      title: 'Full-Stack Integration',
      description: 'Connecting sleek frontends with scalable APIs and backends for modern web applications.'
    }
  ];

  skillCategories: SkillCategory[] = [
    { name: 'Frontend', skills: ['Angular', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Ionic', 'RxJS'] },
    { name: 'Testing', skills: ['Playwright', 'End-to-End Suite', 'Test Automation'] },
    { name: 'Backend', skills: ['Node.js', 'Express', 'FastAPI', 'REST APIs'] },
    { name: 'Database & Tools', skills: ['PostgreSQL', 'MongoDB', 'Git', 'GitHub', 'VS Code'] }
  ];

  projects: Project[] = [
    {
      id: 'room-booking',
      title: 'Conference Room Booking System',
      description: 'A modern room booking platform designed to simplify scheduling and real-time reservation management.',
      category: 'Full-Stack Application',
      tags: ['Angular', 'Ionic', 'FastAPI', 'Firebase'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 'weather-app',
      title: 'Weather Application',
      description: 'A responsive weather application providing dynamic location-based meteorological metrics via REST APIs.',
      category: 'Web Application',
      tags: ['Angular', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.formSubmitting.set(true);
      setTimeout(() => {
        this.formSubmitting.set(false);
        this.formSubmitted.set(true);
        this.contactForm.reset();

        setTimeout(() => this.formSubmitted.set(false), 5000);
      }, 1000);
    }
  }
}