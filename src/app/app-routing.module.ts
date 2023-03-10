import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { CombineLatestComponent } from './observable/combine-latest/combine-latest.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { ConcatMap2Component } from './observable/concat-map2/concat-map2.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { CustomComponent } from './observable/custom/custom.component';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { ExhaustMapComponent } from './observable/exhaust-map/exhaust-map.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { MapComponent } from './observable/map/map.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { MergeComponent } from './observable/merge/merge.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { RetryComponent } from './observable/retry/retry.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { SwitchMap2Component } from './observable/switch-map2/switch-map2.component';
import { TakeComponent } from './observable/take/take.component';
import { TapComponent } from './observable/tap/tap.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { ZipComponent } from './observable/zip/zip.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'ofFrom', component: OfFromComponent },
      { path: 'toArray', component: ToArrayComponent },
      { path: 'custom', component: CustomComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'debounce', component: DebounceTimeComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'replaySubject', component: ReplaySubjectComponent },
      { path: 'asyncSubject', component: AsyncSubjectComponent },
      { path: 'concat', component: ConcatComponent },
      { path: 'merge', component: MergeComponent },
      { path: 'mergeMap', component: MergeMapComponent },
      { path: 'concatMap', component: ConcatMapComponent },
      { path: 'concatMap2', component: ConcatMap2Component },
      { path: 'switchMap', component: SwitchMapComponent },
      { path: 'switchMap2', component: SwitchMap2Component },
      { path: 'exhaust', component: ExhaustMapComponent },
      { path: 'shareReplay', component: ShareReplayComponent },
      { path: 'combineLatest', component: CombineLatestComponent },
      { path: 'zip', component: ZipComponent },
    ],
  },
  { path: '**', redirectTo: 'observable' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
