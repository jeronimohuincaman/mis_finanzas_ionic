import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { TabMovimientosPage } from './tab-movimientos.page';

describe('TabMovimientosPage', () => {
  let component: TabMovimientosPage;
  let fixture: ComponentFixture<TabMovimientosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabMovimientosPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabMovimientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
